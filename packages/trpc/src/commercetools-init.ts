import { ClientBuilder } from "@commercetools/ts-client";
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";

const projectKey = process.env.CTP_PROJECT_KEY!;
const clientId = process.env.CTP_CLIENT_ID!;
const clientSecret = process.env.CTP_CLIENT_SECRET!;
const authUrl = process.env.CTP_AUTH_URL!;
const apiUrl = process.env.CTP_API_URL!;
const scopes = process.env.CTP_SCOPES!;

export const commercetoolsClient = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow({
    host: authUrl,
    projectKey: projectKey,
    credentials: {
      clientId: clientId,
      clientSecret: clientSecret,
    },
    scopes: [`${scopes}`],
    httpClient: fetch,
  })
  .withHttpMiddleware({ host: apiUrl, httpClient: fetch })
  .build();

export const apiRoot = createApiBuilderFromCtpClient(
  commercetoolsClient
).withProjectKey({
  projectKey,
});
