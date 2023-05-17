import { ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { UploadOutput, UploadInput, UploaderOptions } from './interfaces';
import { NgUploaderService } from './ngx-uploader.class';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgFileDropDirective implements OnInit, OnDestroy {
    elementRef: ElementRef;
    options: UploaderOptions;
    uploadInput: EventEmitter<UploadInput>;
    uploadOutput: EventEmitter<UploadOutput>;
    upload: NgUploaderService;
    el: HTMLInputElement;
    _sub: Subscription[];
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    stopEvent: (e: Event) => void;
    onDrop(e: any): void;
    onDragOver(e: Event): void;
    onDragLeave(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgFileDropDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgFileDropDirective, "[ngFileDrop]", never, { "options": { "alias": "options"; "required": false; }; "uploadInput": { "alias": "uploadInput"; "required": false; }; }, { "uploadOutput": "uploadOutput"; }, never, never, false, never>;
}
