import exppress, { json } from 'express';
import fs from 'fs/promises';
import path from 'path';

interface Cell {
    id: string;
    content: string;
    type: 'text' | 'code';
}

export const createCellsRouter = (filename: string, dir: string) => {

    const router = exppress.Router();
    router.use(exppress.json());
    const fullPath = path.join(dir, filename);

    router.get('/cells', async (req, res) => {
        // Read the file
        try {
            const result = await fs.readFile(fullPath, { encoding: 'utf-8'});
            res.send(JSON.parse(result));
        } catch (error: any) {
            if (error.code === 'ENOENT') {
                await fs.writeFile(fullPath, '[]', 'utf-8');
                res.send([])
            } else {
                throw error;
            }
        }

        // Read the file
        // Parse a list of cells ot of it
        // Send list of cells back to browser
    });

    router.post('/cells', async (req, res) => {
        // Take the list of cells frm the request obj
        // serialize them
        const { cells }: { cells: Cell[] } = req.body;

        // write the cells into file
        await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');

        res.send({ status: 'OK'});
    });
    return router;
}

