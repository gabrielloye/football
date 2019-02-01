import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.images = ['/assets/images/united.jpg', '/assets/images/city.JPG', '/assets/images/pool.JPG', '/assets/images/chelsea.jpg', '/assets/images/ars.jpg', '/assets/images/spurs.JPG'];
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = tslib_1.__decorate([
        Component({
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map