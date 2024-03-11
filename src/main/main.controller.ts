import { Get, Controller,Session, Logger,Body,Post, Res } from '@nestjs/common';
import { Response } from 'express';

class Root_Data{
    
    message : string;
    people : Array<string>;

    constructor() {
        this.message = '';
        this.people = new Array<string>();
    }
};


@Controller()
export class MainController {
  

    private readonly logger = new Logger(MainController.name);

    
    //@Get()
    //@Render('welcome')
    //async root() : Promise<void>{
        
        /*
        let pData = new Root_Data();

        pData.message = 'asdasdasdasd';
        pData.people.push('kim 1');
        pData.people.push('kim 2');
        pData.people.push('kim 3');
        pData.people.push('kim 4');
        pData.people.push('kim 5');
        pData.people.push('kim 6');
        pData.people.push('kim 7');
        pData.people.push('kim 8');

        this.logger.debug('message:',pData.message);
        this.logger.debug('people list: ',pData.people);
        
        return {
            Result: pData,
        };
        */
    //}


    @Get('/main_page')
    async main_page(@Res() res: Response) {
        
        let pData = new Root_Data();

        pData.message = 'asdasdasdasd';
        pData.people.push('kim 1');
        pData.people.push('kim 2');
        pData.people.push('kim 3');
        pData.people.push('kim 4');
        pData.people.push('kim 5');
        pData.people.push('kim 6');
        pData.people.push('kim 7');
        pData.people.push('kim 8');

        this.logger.debug('message:',pData.message);
        this.logger.debug('people list: ',pData.people);

        return res.render('temp/main',{ Result : pData});
    }


    @Get('/welcome')
    welcome(@Res() res: Response) {
      return res.render('', { layout:'welcome',message: 'Hello world!!' });
    }


    @Get()
    root(@Res() res: Response) {
      return res.render('index', { message: 'Hello world!!' });
    }
  
    @Get('name')
    printName(@Res() res: Response) {
      return res.render('print', { message: 'Hello world!!' });
    }
  
    @Get('layout')
    anotherLayout(@Res() res: Response) {
      return res.render('print', {
        layout: 'layout_other',
        message: 'Hello world!!',
      });
    }
  
    @Get('array')
    getArray(@Res() res: Response) {
      const contentArray = [
        { message: 'first' },
        { message: 'second' },
        { message: 'third' },
      ];
      return res.render('array', { myArray: contentArray });
    }

};