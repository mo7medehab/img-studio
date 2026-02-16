import { useState } from "react";


const ImgUpscale = () => {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [newFile, setNewFile] = useState(null);
    const [upscalefactor, setUpscaleFactor] = useState(1);

    const fileSelectedHandler = event =>{
        console.log(event.target.files)
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    const upscaleFactorHnadler = event => {
        setUpscaleFactor(event.target.value)
    }

    const infer = () => {
        console.log(upscalefactor)
        const myWorker = new Worker(new URL("../workers/modelworker.js", import.meta.url), { type: 'module' });
        myWorker.postMessage([file, upscalefactor]);
        setProgress(true)
        myWorker.onmessage = function(e) {
            if (e.data) {
                setNewFile(e.data);
                setProgress(false)
            } 
        };
        
    }


    return(
        <div>
        <div className="py-[2%] px-[5%] min-h-screen">
            <div className="grid grid-cols-3 gap-10 ">
                <div className="col-span-2 "> 
                    <div className="bg-base-100 mx-auto py-10 flex content-center justify-center">
                        {!file && <input type="file" className="file-input btn-primary file-input-ghost content-center" onChange={fileSelectedHandler} />}
                        {file && !newFile && <div className="relative inline-block grow">
                            <img src={file} className="w-full rounded-xl shadow-sm"/>
                            {progress &&
                            <div className="absolute inset-0 flex items-center justify-center glass rounded-xl shadow-sm">
                                <span className="loading loading-spinner loading-xl "></span>
                            </div>
                            }
                        </div>  } 

                        {newFile && 
                        <figure className="diff aspect-16/9 grow rounded-xl shadow-sm" tabIndex={0}>
                        <div className="diff-item-1" role="img" tabIndex={0}>
                            <img src={file} />
                        </div>
                        <div className="diff-item-2" role="img">
                            <img src={newFile} />
                        </div>
                        <div className="diff-resizer"></div>
                        </figure>}

                    </div>
                </div>
                <div className="col-span-1">
                    <div className="grid py-10 h-100 grid-cols-1 bg-base-100 justify-start content-start">
                        <div className="py-2"><h1 className="text-3xl font-bold">Edit Image</h1></div>
                        <div className="py-2"><h1 className="text-1xl ">Upscale image</h1></div>
                        <div className="py-2">
                        <div className="w-full">
                        <input type="range" min={1} max="3" value={upscalefactor} className="range w-full" step="1" onChange={upscaleFactorHnadler} />
                        <div className="flex justify-between px-2.5 mt-2 text-xs">
                            <span>|</span>
                            <span>|</span>
                            <span>|</span>
                        </div>
                        <div className="flex justify-between px-2.5 mt-2 text-xs">
                            <span>2X</span>
                            <span>4X</span>
                            <span>8X</span>
                        </div>
                        </div>
                        <div className="py-4 flex">
                        <div className="btn btn-primary grow rounded-xl" disabled={!file || newFile} onClick={()=>infer()}>Upscale</div>
                        </div>
                        <div className="divider"></div>
                        <div className="py-4 flex">
                        <a className="btn btn-primary grow rounded-xl" disabled={!newFile} download="img" href={newFile}>Download Image</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )

}

export default ImgUpscale