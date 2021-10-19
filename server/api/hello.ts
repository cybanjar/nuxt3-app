import  type { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';

export default async ( req: IncomingMessage, res: ServerResponse ) => {
    // hello?search=123
    // {search: 123}
    const queryObject = url.parse(req.url as string, true).query;
    
    let data:any = { data: [{data: ""}] };

    const { search } = queryObject;
    if(search) {
        data = await $fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
    }
    console.log('res: ', res);
    
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(data));
    res.end();
}
