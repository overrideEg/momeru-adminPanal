import { EntityService } from '../../../../../utils/entity.service';

export class UploadAdapter {
    private loader;
    constructor(loader: any) {
      this.loader = loader;
    //   console.log(this.readThis(loader.file));
    }
  
    upload() {
        return this.loader.file
              .then( file => new Promise( ( resolve, reject ) => {
                    var myReader= new FileReader();
                    myReader.onloadend = (e) => {
                       resolve({ default: myReader.result });
                    }
                    myReader.readAsDataURL(file);
              } ) );
     };
  
    // readThis(file: File): Promise<any> {
    //   console.log(file)
    // //   return new Promise((resolve,reject )=>{
    // //     //   return file;
    // //       resolve(file)
    // //   })
    // var myReader: FileReader = new FileReader();
    // console.log(myReader.readAsArrayBuffer(file));
    // ;

    //   let imagePromise: Promise<any> = new Promise((resolve, reject) => {
    //     var myReader: FileReader = new FileReader();
        
    //     myReader.onloadend = (e) => {
    //       let image = myReader.result;
    //       console.log(image);
    //     //   return ;
    //       resolve({ default: "data:image/png;base64," + image });
    //     }
    //     myReader.readAsDataURL(file);
    //   });
    //   return imagePromise;
    // }
  
  }