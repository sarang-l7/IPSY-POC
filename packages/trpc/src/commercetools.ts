import { ClientBuilder } from "@commercetools/ts-client";
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";

const projectKey = process.env.CTP_PROJECT_KEY!;
const clientId = process.env.CTP_CLIENT_ID!;
const clientSecret = process.env.CTP_CLIENT_SECRET!;
const authUrl = process.env.CTP_AUTH_URL!;
const apiUrl = process.env.CTP_API_URL!;

export const commercetoolsClient = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow({
    host: authUrl,
    projectKey: projectKey,
    credentials: {
      clientId: clientId,
      clientSecret: clientSecret,
    },
    scopes: [`${process.env.CTP_SCOPES}`],
    httpClient: fetch
  })
  .withHttpMiddleware({ host: apiUrl, httpClient: fetch })
  .build();

export const apiRoot = createApiBuilderFromCtpClient(
  commercetoolsClient
).withProjectKey({
  projectKey: process.env.CTP_PROJECT_KEY!,
});

export async function authenticateUser(email: string, password: string) {
  const response = await fetch(
    `${authUrl}/oauth/${projectKey}/customers/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "password",
        username: email,
        password: password,
        client_id: clientId,
        client_secret: clientSecret,
      }),
    }
  );
  console.log(email, password, clientId, clientSecret, "secrets");
  if (!response.ok) throw new Error("Authentication failed");
  return response.json(); // Returns { access_token, expires_in, refresh_token }
}
