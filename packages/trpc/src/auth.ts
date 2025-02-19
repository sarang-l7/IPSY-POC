import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { apiRoot } from "./commercetools-init";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign In",
      id: "signin",
      credentials: {
        email: {
          label: "Email Address",
          type: "text",
          placeholder: "Email Address",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        const authRequest = apiRoot.login().post({
          body: {
            email: credentials?.email ?? "",
            password: credentials?.password ?? "",
          },
        });

        const authResponse = await authRequest.execute();
        if (authResponse.statusCode?.toString().startsWith("2")) {
          return authResponse.body.customer;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  callbacks: {
    async session({ session, token }) {
      // if (session?.user) {
      //   session.user.name = token.sub;
      // }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url === "/") return `${baseUrl}`;
      return `${baseUrl}/orders`;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

export { signIn, signOut, useSession } from "next-auth/react";
// export { NextAuth };
