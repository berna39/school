const request = require('supertest');
const app = require('./index');

describe('Root request', () => {
    it('Get /', async () => {
        request(app).get('/').expect('Contant-Type', /json/).expect(200);
    });
});

describe('Test users Api', ()=>{
    it('GET /users --> arrays users ', async () => {
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

    // it('POST /users --> user ', async () => {
    //     return request(app).get('/users').expect('Content-Type', /json/).expect(200)
    //     .then((response) => {
    //         expect(response.body).toEqual(
    //             expect.arrayContaining([
    //                 expect.objectContaining({
    //                     name: expect.any(String)
    //                 })
    //             ])
    //         )
    //     })
    // });

});
