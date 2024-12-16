import prisma, { PrismaClient } from '@prisma/client';

export const db = global.prisma || new PrismaClient();