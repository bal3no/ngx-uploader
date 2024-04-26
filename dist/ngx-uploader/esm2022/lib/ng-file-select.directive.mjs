import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { NgUploaderService } from './ngx-uploader.class';
import * as i0 from "@angular/core";
export class NgFileSelectDirective {
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
        this.el.addEventListener('change', this.fileListener, false);
        this._sub.push(this.upload.serviceEvents.subscribe((event) => {
            this.uploadOutput.emit(event);
        }));
        if (this.uploadInput instanceof EventEmitter) {
            this._sub.push(this.upload.initInputEvents(this.uploadInput));
        }
    }
    ngOnDestroy() {
        if (this.el) {
            this.el.removeEventListener('change', this.fileListener, false);
            this._sub.forEach(sub => sub.unsubscribe());
        }
    }
    fileListener = () => {
        if (this.el.files) {
            this.upload.handleFiles(this.el.files);
        }
    };
    static ɵfac = function NgFileSelectDirective_Factory(t) { return new (t || NgFileSelectDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NgFileSelectDirective, selectors: [["", "ngFileSelect", ""]], inputs: { options: "options", uploadInput: "uploadInput" }, outputs: { uploadOutput: "uploadOutput" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgFileSelectDirective, [{
        type: Directive,
        args: [{
                selector: '[ngFileSelect]'
            }]
    }], () => [{ type: i0.ElementRef }], { options: [{
            type: Input
        }], uploadInput: [{
            type: Input
        }], uploadOutput: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZmlsZS1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXVwbG9hZGVyL3NyYy9saWIvbmctZmlsZS1zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUV0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFNekQsTUFBTSxPQUFPLHFCQUFxQjtJQVViO0lBVFYsT0FBTyxDQUFrQjtJQUN6QixXQUFXLENBQW9CO0lBQzlCLFlBQVksQ0FBNkI7SUFFbkQsTUFBTSxDQUFvQjtJQUMxQixFQUFFLENBQW1CO0lBRXJCLElBQUksQ0FBaUI7SUFFckIsWUFBbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO0lBQ3ZELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUN6RixNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RGLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZGLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ3pGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDWixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFtQixFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFdBQVcsWUFBWSxZQUFZLEVBQUU7WUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEVBQUUsRUFBQztZQUNWLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ2xCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUMsQ0FBQTsrRUEvQ1UscUJBQXFCOzZEQUFyQixxQkFBcUI7O2lGQUFyQixxQkFBcUI7Y0FIakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7MkNBRVUsT0FBTztrQkFBZixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNJLFlBQVk7a0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVwbG9hZE91dHB1dCwgVXBsb2FkZXJPcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IE5nVXBsb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtdXBsb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0ZpbGVTZWxlY3RdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ0ZpbGVTZWxlY3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IFVwbG9hZGVyT3B0aW9ucztcbiAgQElucHV0KCkgdXBsb2FkSW5wdXQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgdXBsb2FkT3V0cHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkT3V0cHV0PjtcblxuICB1cGxvYWQ6IE5nVXBsb2FkZXJTZXJ2aWNlO1xuICBlbDogSFRNTElucHV0RWxlbWVudDtcblxuICBfc3ViOiBTdWJzY3JpcHRpb25bXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMudXBsb2FkT3V0cHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRPdXRwdXQ+KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zdWIgPSBbXTtcbiAgICBjb25zdCBjb25jdXJyZW5jeSA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuY29uY3VycmVuY3kgfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIGNvbnN0IGFsbG93ZWRDb250ZW50VHlwZXMgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFsbG93ZWRDb250ZW50VHlwZXMgfHwgWycqJ107XG4gICAgY29uc3QgbWF4VXBsb2FkcyA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubWF4VXBsb2FkcyB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgY29uc3QgbWF4RmlsZVNpemUgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLm1heEZpbGVTaXplIHx8IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICB0aGlzLnVwbG9hZCA9IG5ldyBOZ1VwbG9hZGVyU2VydmljZShjb25jdXJyZW5jeSwgYWxsb3dlZENvbnRlbnRUeXBlcywgbWF4VXBsb2FkcywgbWF4RmlsZVNpemUpO1xuXG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5maWxlTGlzdGVuZXIsIGZhbHNlKTtcblxuICAgIHRoaXMuX3N1Yi5wdXNoKFxuICAgICAgdGhpcy51cGxvYWQuc2VydmljZUV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50OiBVcGxvYWRPdXRwdXQpID0+IHtcbiAgICAgICAgdGhpcy51cGxvYWRPdXRwdXQuZW1pdChldmVudCk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAodGhpcy51cGxvYWRJbnB1dCBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgICAgdGhpcy5fc3ViLnB1c2godGhpcy51cGxvYWQuaW5pdElucHV0RXZlbnRzKHRoaXMudXBsb2FkSW5wdXQpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5lbCl7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuZmlsZUxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICB0aGlzLl9zdWIuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGZpbGVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5lbC5maWxlcykge1xuICAgICAgdGhpcy51cGxvYWQuaGFuZGxlRmlsZXModGhpcy5lbC5maWxlcyk7XG4gICAgfVxuICB9XG59XG4iXX0=