class User
{
	constructor(data)
	{
		this.name  = data.name;
		this.email = data.email;
	}

	get getName()
	{
		return this.name;
	}

	get getEmail()
	{
		return this.email;
	}

	setName(name)
	{
		this.name = name;
	}

	setEmail(email)
	{
		this.email = email;
	}
}

class Admin extends User 
{
	setPassword(password)
	{
		this.password = password;
	}

	get getPassword()
	{
		return this.password;
	}

	createNewCar(data)
	{
		this.obj = new Kendaraan(data);
	}

	get getObj()
	{
		return this.obj;
	}
}

$admin = new Admin({
	name:'Budi',
	email:'Budi@gmail.com'
});

$admin.setPassword('abcde123456');


$admin.createNewCar({
	type:'Lamborgini',
	color:'Gold',
	price:'1 Bilion'
});

var data_mobil_admin = $admin.getObj.getData;


document.getElementById('name').innerHTML = $admin.getName;
document.getElementById('email').innerHTML = $admin.getEmail;
document.getElementById('password').innerHTML = $admin.getPassword;

document.getElementById('mobil_type').innerHTML = data_mobil_admin[0];
document.getElementById('mobil_color').innerHTML = data_mobil_admin[1];
document.getElementById('mobil_price').innerHTML = data_mobil_admin[2];
