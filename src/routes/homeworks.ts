import { FastifyInstance } from 'fastify';

export default async function (server: FastifyInstance) {
	server.get('/', async (request, reply) => {
		return {msg:"Hey i am Lamis"}
	});

	server.get('/Homework', async (request, reply) => {
		return {msg:"this is a homework"}
	});
}
