"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const hbs = require("express-handlebars");
const helpers_1 = require("./hbs/helpers");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.useStaticAssets((0, path_1.join)(__dirname, './common', 'uploads'), { prefix: '/media' });
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.engine('hbs', hbs({
        extname: 'hbs',
        defaultLayout: 'layout_main',
        layoutsDir: (0, path_1.join)(__dirname, '..', 'views', 'layouts'),
        partialsDir: (0, path_1.join)(__dirname, '..', 'views', 'partials'),
        helpers: { printName: helpers_1.printName },
    }));
    app.setViewEngine('hbs');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map