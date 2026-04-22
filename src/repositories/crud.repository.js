class CrudRepository{
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async getAll() {
        const response = await this.model.find();
        return response;
    }

    async getById(id) {
        const response = await this.model.findById(id).select("-password");
        return response;
    }

    async update(id, data) {
        const response = await this.model.findByIdAndUpdate(id, data);
        return response;
    }

    async delete(id) {
        const response = await this.model.findByIdAndDelete(id);
        return response;
    }
}

module.exports = CrudRepository;