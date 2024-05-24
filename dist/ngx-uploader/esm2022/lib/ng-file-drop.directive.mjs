import { Directive, ElementRef, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { NgUploaderService } from './ngx-uploader.class';
import * as i0 from "@angular/core";
export class NgFileDropDirective {
    elementRef;
    options;
    uploadInput;
    uploadOutput;
    upload;
    el;
    _sub;
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.uploadOutput = new EventEmitter();
    }
    ngOnInit() {
        this._sub = [];
        const concurrency = this.options && this.options.concurrency || Number.POSITIVE_INFINITY;
        const allowedContentTypes = this.options && this.options.allowedContentTypes || ['*'];
        const maxUploads = this.options && this.options.maxUploads || Number.POSITIVE_INFINITY;
        const maxFileSize = this.options && this.options.maxFileSize || Number.POSITIVE_INFINITY;
        this.upload = new NgUploaderService(concurrency, allowedContentTypes, maxUploads, maxFileSize);
        this.el = this.elementRef.nativeElement;
        this._sub.push(this.upload.serviceEvents.subscribe((event) => {
            this.uploadOutput.emit(event);
        }));
        if (this.uploadInput instanceof EventEmitter) {
            this._sub.push(this.upload.initInputEvents(this.uploadInput));
        }
        this.el.addEventListener('drop', this.stopEvent, false);
        this.el.addEventListener('dragenter', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
    }
    ngOnDestroy() {
        if (this._sub) {
            this._sub.forEach(sub => sub.unsubscribe());
        }
    }
    stopEvent = (e) => {
        e.stopPropagation();
        e.preventDefault();
    };
    onDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        const event = { type: 'drop' };
        this.uploadOutput.emit(event);
        this.upload.handleFiles(e.dataTransfer.files);
    }
    onDragOver(e) {
        if (!e) {
            return;
        }
        const event = { type: 'dragOver' };
        this.uploadOutput.emit(event);
    }
    onDragLeave(e) {
        if (!e) {
            return;
        }
        const event = { type: 'dragOut' };
        this.uploadOutput.emit(event);
    }
    static ɵfac = function NgFileDropDirective_Factory(t) { return new (t || NgFileDropDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NgFileDropDirective, selectors: [["", "ngFileDrop", ""]], hostBindings: function NgFileDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("drop", function NgFileDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("dragover", function NgFileDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function NgFileDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); });
        } }, inputs: { options: "options", uploadInput: "uploadInput" }, outputs: { uploadOutput: "uploadOutput" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgFileDropDirective, [{
        type: Directive,
        args: [{
                selector: '[ngFileDrop]'
            }]
    }], () => [{ type: i0.ElementRef }], { options: [{
            type: Input
        }], uploadInput: [{
            type: Input
        }], uploadOutput: [{
            type: Output
        }], onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }], onDragOver: [{
            type: HostListener,
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: HostListener,
            args: ['dragleave', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmlsZS1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11cGxvYWRlci9zcmMvbGliL25nLWZpbGUtZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXFCLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFNekQsTUFBTSxPQUFPLG1CQUFtQjtJQVVYO0lBVFYsT0FBTyxDQUFrQjtJQUN6QixXQUFXLENBQTRCO0lBQ3RDLFlBQVksQ0FBNkI7SUFFbkQsTUFBTSxDQUFvQjtJQUMxQixFQUFFLENBQW1CO0lBRXJCLElBQUksQ0FBaUI7SUFFckIsWUFBbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO0lBQ3ZELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUN6RixNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RGLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZGLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLElB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O2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7MkNBRVUsT0FBTztrQkFBZixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNJLFlBQVk7a0JBQXJCLE1BQU07WUFnREEsTUFBTTtrQkFEWixZQUFZO21CQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVd6QixVQUFVO2tCQURoQixZQUFZO21CQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVc3QixXQUFXO2tCQURqQixZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcGxvYWRPdXRwdXQsIFVwbG9hZElucHV0LCBVcGxvYWRlck9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTmdVcGxvYWRlclNlcnZpY2UgfSBmcm9tICcuL25neC11cGxvYWRlci5jbGFzcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nRmlsZURyb3BdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ0ZpbGVEcm9wRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBvcHRpb25zOiBVcGxvYWRlck9wdGlvbnM7XG4gIEBJbnB1dCgpIHVwbG9hZElucHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+O1xuICBAT3V0cHV0KCkgdXBsb2FkT3V0cHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkT3V0cHV0PjtcblxuICB1cGxvYWQ6IE5nVXBsb2FkZXJTZXJ2aWNlO1xuICBlbDogSFRNTElucHV0RWxlbWVudDtcblxuICBfc3ViOiBTdWJzY3JpcHRpb25bXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMudXBsb2FkT3V0cHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRPdXRwdXQ+KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zdWIgPSBbXTtcbiAgICBjb25zdCBjb25jdXJyZW5jeSA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuY29uY3VycmVuY3kgfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIGNvbnN0IGFsbG93ZWRDb250ZW50VHlwZXMgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFsbG93ZWRDb250ZW50VHlwZXMgfHwgWycqJ107XG4gICAgY29uc3QgbWF4VXBsb2FkcyA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubWF4VXBsb2FkcyB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgY29uc3QgbWF4RmlsZVNpemUgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLm1heEZpbGVTaXplIHx8IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICB0aGlzLnVwbG9hZCA9IG5ldyBOZ1VwbG9hZGVyU2VydmljZShjb25jdXJyZW5jeSwgYWxsb3dlZENvbnRlbnRUeXBlcywgbWF4VXBsb2FkcywgbWF4RmlsZVNpemUpO1xuXG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5fc3ViLnB1c2goXG4gICAgICB0aGlzLnVwbG9hZC5zZXJ2aWNlRXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IFVwbG9hZE91dHB1dCkgPT4ge1xuICAgICAgICB0aGlzLnVwbG9hZE91dHB1dC5lbWl0KGV2ZW50KTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmICh0aGlzLnVwbG9hZElucHV0IGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgICB0aGlzLl9zdWIucHVzaCh0aGlzLnVwbG9hZC5pbml0SW5wdXRFdmVudHModGhpcy51cGxvYWRJbnB1dCkpO1xuICAgIH1cblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuc3RvcEV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLnN0b3BFdmVudCwgZmFsc2UpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLnN0b3BFdmVudCwgZmFsc2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICBpZiAodGhpcy5fc3ViKSB7XG4gICAgICAgIHRoaXMuX3N1Yi5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICB9XG4gIH1cblxuICBzdG9wRXZlbnQgPSAoZTogRXZlbnQpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Ecm9wKGU6IGFueSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZXZlbnQ6IFVwbG9hZE91dHB1dCA9IHsgdHlwZTogJ2Ryb3AnIH07XG4gICAgdGhpcy51cGxvYWRPdXRwdXQuZW1pdChldmVudCk7XG4gICAgdGhpcy51cGxvYWQuaGFuZGxlRmlsZXMoZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25EcmFnT3ZlcihlOiBFdmVudCkge1xuICAgIGlmICghZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50OiBVcGxvYWRPdXRwdXQgPSB7IHR5cGU6ICdkcmFnT3ZlcicgfTtcbiAgICB0aGlzLnVwbG9hZE91dHB1dC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyYWdMZWF2ZShlOiBFdmVudCkge1xuICAgIGlmICghZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50OiBVcGxvYWRPdXRwdXQgPSB7IHR5cGU6ICdkcmFnT3V0JyB9O1xuICAgIHRoaXMudXBsb2FkT3V0cHV0LmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=