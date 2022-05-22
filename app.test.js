const request = require('supertest');
const app = require('./index');

describe('Root request', () => {
    it('Get /', async () => {
        request(app).get('/').expect('Contant-Type', /json/).expect(200);
    });
});

describe('Test users Api', ()=>{
    it('GET /users --> find users [ arrays users ]', async () => {
        return request(app).get('/users').expect('Content-Type', /json/).expect(200)
        .then((response) => {
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        name: expect.any(String),
                        user_name: expect.any(String),
                        password: expect.any(String),
                        age: expect.any(Number),
                        type: expect.any(Number)
                    })
                ])
            );
        });
    });

    it('GET /users/id ---> find unexstiting user [ 404 not found ]', async () => {

        return request(app).get('/users/terminator39').expect('Content-Type', /json/).expect(404);

    });

    it('POST /users ---> insert user  [ 201 created ]', async () => {

        return request(app).post('/users').send({
            name: "Kabuto oshigaki",
            user_name: "kabuto@gmail.com",
            password: 'akatsuki',
            age: 24
        }).expect('Content-Type', /json/).expect(201);
        
    });

    it('POST /users ---> validate request body [ 400 bad request ]', async () => {

        return request(app).post('/users').send({
            name: "Kabuto oshigaki",
            user_name: "kabuto",
            password: 'akatsuki',
            age: 24
        }).expect('Content-Type', /json/).expect(400);

    });

    // it('PATCH /users ---> update user [ 200 ok ]', async () => {

    //     return request(app).patch('/users/').send({
    //         name: "Kabuto oshigaki",
    //         user_name: "oroshimaru",
    //         password: 'akatsuki',
    //         age: 24
    //     }).expect('Content-Type', /json/).expect(200);

    // });

    it('PATCH /users/:id ---> update : validate request [ 400 bad request ]', async () => {

        return request(app).patch('/users/terminator39').send({
            name: "Kabuto oshigaki",
            user_name: "kabuto",
            password: 'akatsuki',
            age: 24
        }).expect('Content-Type', /json/).expect(400);

    });

    it('PATCH /users/:id ---> update : unexisting user [ 404 not found ]', async () => {

        return request(app).patch('/users/terminator39').send({
            name: "Kabuto oshigaki",
            user_name: "kabuto@gmail.com",
            password: 'akatsuki',
            age: 24
        }).expect('Content-Type', /json/).expect(404);

    });

    // it('DELETE /users/:id ---> delete : [ 200 ok ]', async () => {

    //     return request(app).delete('/users/terminator39').expect('Content-Type', /json/).expect(200);

    // });

    it('DELETE /users/:id ---> delete unexisting user: [ 404 not found ]', async () => {

        return request(app).delete('/users/terminator39').expect('Content-Type', /json/).expect(404);

    });

});
