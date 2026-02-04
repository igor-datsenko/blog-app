import {Header} from "./header/header.tsx";

export const Layout = ( { children  } : any) => {
    return (
        <>
            <Header />
            <div className="content-center">
                { children  }
            </div>
        </>
    )
}