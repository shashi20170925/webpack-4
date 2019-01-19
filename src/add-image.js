import dsc0020th from './Sample Pictures/Flowers/DSC_0020_th.jpg';
function addImage(){
    const img=document.createElement('img');
    img.alt='missing image';
    img.width='300'
    img.src=dsc0020th;

    const body=document.querySelector('body');
    body.appendChild(img);
}

export default addImage;