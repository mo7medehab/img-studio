import { useState } from "react";


const ImgBGRemove = () => {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [newFile, setNewFile] = useState(null);

    const fileSelectedHandler = event =>{
        console.log(event.target.files)
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    const infer = () => {
        const myWorker = new Worker(new URL("../workers/modelworkerbg.js", import.meta.url), { type: 'module' });
        myWorker.postMessage([file]);
        setProgress(true)
        myWorker.onmessage = function(e) {
            if (e.data) {
                setNewFile(e.data);
                setProgress(false)
            } 
        };
        
    }


    return(
        <main className="flex-grow min-h-screen">
        <div className="py-[2%] px-[5%]">
            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-2"> 
                    <div className="bg-base-100 mx-auto py-10 flex content-center justify-center">
                        {!file && <input type="file" className="file-input btn-primary file-input-ghost " onChange={fileSelectedHandler} />}
                        {file && !newFile && <div className="relative inline-block grow">
                            <img src={file} className="w-full"/>
                            {progress &&
                            <div className="absolute inset-0 flex items-center justify-center glass">
                                <span className="loading loading-spinner loading-xl "></span>
                            </div>
                            }
                        </div>  } 

                        {newFile && 
                        <figure className="diff aspect-16/9 grow" tabIndex={0}>
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
                        <div className="py-2"><h1 className="text-1xl ">Remove image Background</h1></div>
                        <div className="py-4 flex">
                        <div className="btn btn-primary grow" disabled={!file} onClick={()=>infer()}>Remove</div>
                        </div>
                        <div className="divider"></div>
                        <div className="py-4 flex">
                        <a className="btn btn-primary grow rounded-md" disabled={!newFile} download="img" href={newFile}>Download Image</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )

}

export default ImgBGRemove