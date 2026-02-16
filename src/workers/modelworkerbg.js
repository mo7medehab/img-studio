import { pipeline } from '@huggingface/transformers';

onmessage = async (e) => {
    console.log("Message received from main script");
    const bgremover = await pipeline('background-removal', 'briaai/RMBG-1.4', {
        dtype: 'fp32', device: "webgpu"
    });

    const url = e.data[0];
    let output = await bgremover(url);
    
    let b = await output[0].toBlob();
    let u = URL.createObjectURL(b);

    self.postMessage(u)

};   