import { pipeline } from '@huggingface/transformers';

onmessage = async (e) => {
    let upscalefactor = e.data[1];
        
    const upscaler = await pipeline('image-to-image', 'Xenova/swin2SR-lightweight-x2-64', {
        dtype: 'fp32', device: "webgpu"
    });

    let url = e.data[0];
    
    for (let i = 0; i < upscalefactor; i++) {
        let output = await upscaler(url);
        let b = await output.toBlob();
        url = URL.createObjectURL(b);
        console.log(i);
    }


    self.postMessage(url)

};   