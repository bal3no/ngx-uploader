import { ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { UploadOutput, UploaderOptions } from './interfaces';
import { NgUploaderService } from './ngx-uploader.class';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgFileSelectDirective implements OnInit, OnDestroy {
    elementRef: ElementRef;
    options: UploaderOptions;
    uploadInput: EventEmitter<any>;
    uploadOutput: EventEmitter<UploadOutput>;
    upload: NgUploaderService;
    el: HTMLInputElement;
    _sub: Subscription[];
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    fileListener: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgFileSelectDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgFileSelectDirective, "[ngFileSelect]", never, { "options": { "alias": "options"; "required": false; }; "uploadInput": { "alias": "uploadInput"; "required": false; }; }, { "uploadOutput": "uploadOutput"; }, never, never, false, never>;
}
