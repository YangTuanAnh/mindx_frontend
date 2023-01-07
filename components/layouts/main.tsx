import Head from 'next/head'
import Page from './page'

const Main = ({ children, router }: { children: any, router: any }) =>
{
    return (
        <div>
            <Head>
                <title>Resume Builder</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="w-full">
                <div className="flex h-[200%] bg-gray-200">
                    <div className="w-1/3 bg-white shadow-2xl p-3">
                        {children}
                    </div>

                    <Page />
                </div>
            </div>

        </div>
    )
}

export default Main