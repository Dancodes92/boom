/* eslint-disable @next/next/no-img-element */
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-40">
        <img className="w-80" src="/boom.png" alt="boom logo" />
        <div className="mt-30">
          {Object.values(providers).map(provider => (
            <div key={provider.name}>
              <button
                className="bg-boom hover:bg-msg text-white font-bold py-2 px-4 rounded"
                onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

//server side rendering
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signin;
