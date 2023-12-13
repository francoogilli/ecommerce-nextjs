export default{
    name:'product',
    type:'document',
    title:'Product',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Name of Product',
        },
        {
            name:'images',
            type:'array',
            title:'Product Images',
            of:[{type:'image'}]
        },
        {
            name:'description',
            type:'text',
            title:'Description of product'
        },
        {
            name:'slug',
            type:'slug',
            title:'Product slug',
            options:{
                source:'name',
            }
        },
        {
            name:'price',
            title:'Price',
            type:'number',
        },
        {
            name:'price_id',
            title:'Stripe Product ID',
            type:'string'
        },
        {
            name:'category',
            title:'Product Category',
            type:'reference',
            to:[{
                type:'category',
            }]
        },
        {
            name:'classification',
            title:'Product Classification',
            type:'reference',
            to:[{
                type:'classification',
            }]
        }
    ],
}