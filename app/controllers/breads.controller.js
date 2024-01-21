import breadsDatamapper from "../datamappers/breads.datamapper.js";

export default {

    async getBreads(req, res) {
        try {
            const breads = await breadsDatamapper.getBreads();
            res.status(200).json(breads);
        }
        catch(err) {
            console.trace(err);
            res.status(500).json({error: '500 Internal Server Error'});
        }
    },

    async getBreadById(req, res) {
        const id = req.params.id;
        try {
            const breadId = Number.parseInt(req.params.id, 10);
            if(isNaN(breadId)){
            return res.status(400).json({error: 'Bread ID should be a valid integer'});
            }

            const bread = await breadsDatamapper.getBreadById(id);

            if(bread.length == 0){
                return res.status(400).json({error: 'Bread not found. Please verify the provided id.'});
            }
            res.status(200).json(bread)
        }
        catch(err) {
            console.trace(err);
            res.status(500).json({error: '500 Internal Server Error'});
        }
    },

    async createdBread(req, res) {
        const title = req.body.title;
        const description = req.body.description;
        const img = req.body.img;
        const price = req.body.price;
        const methodOfConservation = req.body.method_of_conservation;
        const composition = req.body.composition;
		const nutritionalValues = req.body.nutritional_values;
		const allergens = req.body.allergens;
        try {

            const data = {
                title,
                description,
                img,
                price,
                methodOfConservation,
                composition,
                nutritionalValues,
                allergens
            };

            const createdBread = await breadsDatamapper.createdBread(data);
            res.status(200).json(createdBread)

        }
        catch(err) {
            console.trace(err);
            res.status(500).json({error: '500 Internal Server Error'});
        }
    },

    async updatedBread(req, res) {
        const id = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        const img = req.body.img;
        const price = req.body.price;
        const methodOfConservation = req.body.method_of_conservation;
        const composition = req.body.composition;
		const nutritionalValues = req.body.nutritional_values;
		const allergens = req.body.allergens;
        try {
            const breadId = Number.parseInt(req.params.id, 10);
            if(isNaN(breadId)){
            return res.status(400).json({error: 'Bread ID should be a valid integer'});
            }

            const data = {
                id,
                title,
                description,
                img,
                price,
                methodOfConservation,
                composition,
                nutritionalValues,
                allergens
            };

            const updatedBread = await breadsDatamapper.updatedBread(data);

            if(updatedBread.length == 0){
                return res.status(400).json({error: 'Bread not found. Please verify the provided id.'});
            }

            res.status(200).json(updatedBread)

        }
        catch(err) {
            console.trace(err);
            res.status(500).json({error: '500 Internal Server Error'});
        }
    },

    async deletedBread(req, res) {
        const id = req.params.id;
        try {
            const breadId = Number.parseInt(req.params.id, 10);
            if(isNaN(breadId)){
            return res.status(400).json({error: 'Bread ID should be a valid integer'});
            };

            const deletedBread = await breadsDatamapper.deleteBread(id);

            if(deletedBread.length == 0){
                return res.status(400).json({error: 'Bread not found. Please verify the provided id.'});
            }
            res.status(204).json(deletedBread);
        }
        catch(err) {
            console.trace(err);
            res.status(500).json({error: '500 Internal Server Error'});
        }
    }
};