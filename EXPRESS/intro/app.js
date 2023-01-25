const express = require('express');
const cors = require('cors');
const { response } = require('express');

const app = express();
app.use(cors());


const port = 8000;



const categories = [
    {
        id: "1",
        name: 'Toyota',
        categoryId: "t"
    },
    {
        id: 2,
        name: 'Mercedes Benz',
        categoryId: "2"
    },
    {
        id: 3,
        name: 'BMW',
        categoryId: "3"
    },
    {
        id: 4,
        name: 'Nissan',
        categoryId: "4"
    }

];

const articles = [
    {
        id: 1,
        name: 'Supra MK4',
        categoryId: "1",
        imageUrl: 'http://cdn.shopify.com/s/files/1/0284/7378/6465/collections/toyota-supra-mkiv-turbotarga-780x405_1200x630.jpg?v=1593681769',
        text: 'If one Japanese sports car could define a decade it would have to come from Toyota. Their flagship of the 1990s was the Toyota Supra for sale. What began as a trim level in 1978 evolved through 4 generations to become its own model. The Toyota Supra price depended on three options. First was your choice of turbo or naturally aspirated. Number 2 is an automatic or manual transmission. The third is hardtop or sports roof. The Toyota Supra specs included the option for a removable targa top. A well-optioned Mark 4 Toyota Supra Price would reach $40,000, a fraction of what they sell for now. In fact, the Supra Mk4 price has exponentially shot up over the years.'
    },
    {
        id: 2,
        name: '7th generation S-class',
        categoryId: "2",
        imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/S-Class/7994/1633596468711/front-left-side-47.jpg',
        text: 'Under the bonnet of the S 350 d is a twin-turbocharged 3.0-litre six-cylinder turbodiesel engine making 284hp and 600Nm of torque. This is the entry-level version, remember. That translates into serious performance by any measure, with 0-100km/h in just 6.4 seconds and effortless acceleration seemingly at any time without the car breaking a sweat. Indeed, you barely notice the excellent nine-speed automatic gearbox changing ratios it’s so smooth.'
    },
    {
        id: 3,
        name: 'M5',
        categoryId: "3",
        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90418385-highres-portimo-por-15th-apr-1670360779.jpg',
        text: 'Some cars are big-bodied and some are thrilling. The BMW M5 is both, with a body based on the regular 5-series and a heart-and-lung transplant courtesy of the brand’s M performance division. Under the hood lives a spectacular 600-hp twin-turbo V-8 bolted to an eight-speed automatic transmission that powers all four wheels. An optional Competition package turns up the heat with 17 extra horsepower, a more soulful exhaust, stiffer suspension, and Competition badging and trim. That version rocketed to 60 mph in 2.8 seconds in our testing. Built to handle the rigors of mountain hairpins, blasts on the autobahn, and everyday life the M5 offers a premium experience with a penchant for fireworks. Unlike its closest competitor, the Cadillac CT5-V Blackwing, the Bimmer’s stealthy packaging isn’t offset by a thunderous exhaust but its impressive comfort and refinement make it among the best in the premium sports sedan segment.'
    },
    {
        id: 4,
        name: 'R34 (Skyline)',
        categoryId: "4",
        imageUrl: 'https://blog.way.com/wp-content/uploads/2022/11/Nissan-Skyline-GT-R-R34.jpg',
        text: 'he Nissan Skyline GT-R (Japanese: 日産・スカイラインGT-R, Hepburn: Nissan Sukairain GT-R) is a sports car based on the Nissan Skyline range. The first cars named "Skyline GT-R" were produced between 1969 and 1972 under the model code KPGC10, and were successful in Japanese touring car racing events. This model was followed by a brief production run of second-generation cars, under model code KPGC110, in 1973.'
    },
    {
        id: 5,
        name: 'GT63',
        categoryId: "2",
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-gt-63-21c0293-107-source-1649250184.jpg?crop=0.822xw:0.616xh;0.0456xw,0.276xh&resize=1200:*',
        text: 'The 2023 Mercedes-AMG GT sedan synthesizes performance and presence in a way that few four-doors can. Mechanically, it’s based on the E-class wagon not the GT sports car, but no matter—it behaves much the same as the two-seater. The inline-six in the GT43 and GT53 models have plenty of muscle but its the twin-turbo V-8-powered GT63 models that are the apex predators of the lineup. Handling is satisfyingly sporty for such a large vehicle—and brilliant in the most aggressive models. The fact that you can bring three passengers along on your joy rides is an added plus. Despite the cars performance potential, it doesnt skimp on luxury; the interior is nicely tailored in fine materials and dotted with modern conveniences. Rear-seat headroom isnt as generous here as it is in the E63 sedan, but the GTs low fastback roofline offsets that deficit with a more exotic look.'
    },
    {
        id: 6,
        name: 'GT86',
        categoryId: "1",
        imageUrl: 'https://www.topgear.com/sites/default/files/cars-car/image/2018/07/toyota-gt86-047.jpg',
        text: 'You’ll work it hard to drive this car quickly, mind. Maximum torque – a fairly thin 151lb ft – doesn’t arrive until 6,400rpm, a mere handful of revs before you reach peak power. But so long as you keep things above 4,000rpm, the GT86 does feel usefully brisk. And its modest power matches modest grip, so quite often – particularly when it’s grimy and wintry – you won’t be wishing for more muscle.'
    },
    {
        id: 7,
        name: 'R35',
        categoryId: "4",
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2024-nissan-gt-r-119-1673621285.jpg?crop=0.655xw:0.873xh;0,0.0405xh&resize=640:*',
        text: 'You’ll work it hard to drive this car quickly, mind. Maximum torque – a fairly thin 151lb ft – doesn’t arrive until 6,400rpm, a mere handful of revs before you reach peak power. But so long as you keep things above 4,000rpm, the GT86 does feel usefully brisk. And its modest power matches modest grip, so quite often – particularly when it’s grimy and wintry – you won’t be wishing for more muscle.'
    },
    {
        id: 8,
        name: 'i8',
        categoryId: "3",
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2020-bmwi8-mmp-1-1573836896.jpg?crop=0.736xw:0.824xh;0.0782xw,0.176xh&resize=640:*',
        text: 'You’ll work it hard to drive this car quickly, mind. Maximum torque – a fairly thin 151lb ft – doesn’t arrive until 6,400rpm, a mere handful of revs before you reach peak power. But so long as you keep things above 4,000rpm, the GT86 does feel usefully brisk. And its modest power matches modest grip, so quite often – particularly when it’s grimy and wintry – you won’t be wishing for more muscle.'
    },



]
app.get('/categories', (request, response) => {
    response.status(200);
    response.json(categories);
});
app.get('/category/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    const filteredArr = articles.filter((e) => {
        return e.categoryId === id;
    })
    res.json(filteredArr)
})
app.get('/articles', (req, res) => {
    res.status(200);
    res.json(articles)
})
app.get('/articles/:id', (req, res) => {
    const { id } = req.params;
    res.json(articles[Number(id) - 1]);
})
app.listen(port, () => {
    console.log('http://localhost:' + port)
});
