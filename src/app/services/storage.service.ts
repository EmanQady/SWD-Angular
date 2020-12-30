import { Injectable } from '@angular/core';
import { SideitemComponent} from './../sideitem/sideitem.component';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  formValues$: Observable<any>;
  constructor() { }
 initforms: {
    id: number, title: string, startDate: string, endDate: string, proObj: string,
    proManager: string, proInfo: string, proScope: string
  }[] = [];


  reqforms: {
    id: number, intro: string, purpose: string, audience: string,
    description: string, features: string, imgUrl: string
  }[] = [];

  designforms: {
    id: number, filename: string, docs: Array<string>
  }[] = [];


  onInitformAdded(title: string, startDate: string, endDate: string, proObj: string,
manager: string, proInfo: string, proScope: string) {
    this.initforms.push({
      id: this.initforms.length + 1,
      title: title,
      startDate: startDate,
      endDate: endDate,
      proObj: proObj,
      proManager: manager,
      proInfo: proInfo,
      proScope: proScope
    });

  }
  onInitformUpdate(id: number, initform: any) {
    this.initforms[id - 1].title = initform.title;
    this.initforms[id - 1].startDate = initform.startDate;
    this.initforms[id - 1].endDate = initform.endDate;
    this.initforms[id - 1].proObj = initform.proObj;
    this.initforms[id - 1].proManager = initform.proManager;
    this.initforms[id - 1].proInfo = initform.proInfo;
    this.initforms[id - 1].proScope = initform.proScope;
  }

  onReqformAdded(intro: string, purpose: string, audience: string,
    description: string, features: string, imgUrl: string) {
    this.reqforms.push({
      id: this.reqforms.length + 1,
      intro: intro,
      purpose: purpose,
      audience: audience,
      description: description,
      features: features,
      imgUrl: imgUrl
    });
  }

  onReqformUpdate(id: number, reqform: any) {
    this.reqforms[id - 1].intro = reqform.intro;
    this.reqforms[id - 1].purpose = reqform.purpose;
    this.reqforms[id - 1].audience = reqform.audience;
    this.reqforms[id - 1].description = reqform.description;
    this.reqforms[id - 1].features = reqform.features;
    this.reqforms[id - 1].imgUrl = reqform.imgUrl;

  }

  onDesignformAdded(filename: string, docs: Array<string>) {
    this.designforms.push({
      id: this.initforms.length + 1,
      filename: filename,
      docs: docs
    });
  }

  onDesignformUpdate(id: number, designform: any) {
    this.designforms[id - 1].filename = designform.filename;
    this.designforms[id - 1].docs = designform.docs;
  }

  getFormById(id: number) {
    return this.initforms.find((element) => { return element.id == id });
  }


}
