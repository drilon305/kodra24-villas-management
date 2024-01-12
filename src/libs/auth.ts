import  { NextAuthOptions } from 'next-auth';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import GoogleProvider from 'next-auth/providers/google';


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          }),
          SanityCredentials(),
    ],
    session: {
        strategy: 'jwt'
      },
      adapter: SanityAdapter(),
      debug: process.env.NODE_ENV === 'development',
      secret: process.env.NEXTAUTH_SECRET,
      callbacks: {}
}

