
class Kendaraan
{
	constructor(data)
	{
		this.color = data.color;
		this.type  = data.type;
		this.price = data.price;
	}

	get getData()
	{
		return [this.color,this.type,this.price]
	}
}

