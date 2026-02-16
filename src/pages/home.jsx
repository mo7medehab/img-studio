
const Home = () => {
    const imgUrl1 = new URL('../assets/example1.jpg', import.meta.url).href
    const imgUrl2 = new URL('../assets/example1upscaled.png', import.meta.url).href
    const imgUrl3 = new URL('../assets/example2.avif', import.meta.url).href
    const imgUrl4 = new URL('../assets/example2removed.png', import.meta.url).href
    return(
        <div>
        <div className="py-[2%] px-[10%]">
            <div className="hero bg-linear-to-br from-base-300 via-base-100 to-base-200 mx-auto  py-[15%] px-[20%] rounded-xl">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Edit Images in browser</h1>
                    <p className="py-6">
                        Use latest AI models to remove backgrounds from your images or to improve their resolution. Fully in browser without uploading any picture
                        to the cloud.
                    </p>
                    <a className="btn btn-primary" href="/img-studio/upscale">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-[3%] px-[10%] ">
        <div className="flex mx-auto content-between justify-between items-start ">
            <div>
            <h1 className="text-3xl font-bold">AI image upscaling</h1>
            <p className="py-6">
                Upscale images up to 8x using AI
            </p>
            <a className="btn btn-primary" href="/img-studio/upscale">Get Started</a>
            </div>
            <div>
            <figure className="diff aspect-16/9 h-48 w-85 max-w-sm rounded-xl shadow-2xl" tabIndex={0}>
            <div className="diff-item-1" role="img" tabIndex={0}>
                <img src={imgUrl1} />
            </div>
            <div className="diff-item-2" role="img">
                <img src={imgUrl2} />
            </div>
            <div className="diff-resizer"></div>
            </figure>
            </div>
        </div>
        </div>

        <div className="py-[3%] px-[10%] ">
        <div className="flex mx-auto content-between justify-between items-start ">
            <div>
            <h1 className="text-3xl font-bold">Remove image backgrounds</h1>
            <p className="py-6">
                Using newest AI models, remove backgrounds from images
            </p>
            <a className="btn btn-primary" href="/img-studio/bgremove">Get Started</a>
            </div>
            <div>
            <figure className="diff aspect-16/9 h-48 w-85 max-w-sm rounded-xl shadow-2xl" tabIndex={0}>
            <div className="diff-item-1" role="img" tabIndex={0}>
                <img src={imgUrl3} />
            </div>
            <div className="diff-item-2" role="img">
                <img src={imgUrl4} />
            </div>
            <div className="diff-resizer"></div>
            </figure>
            </div>
        </div>
        </div>

    </div>
    )
}

export default Home