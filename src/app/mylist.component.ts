import {Component} from '@angular/core';

@Component({
	selector:'my-list',
	templateUrl:'./mylist.component.html'
})
export class MyComponent {
	dataList= [
	{
		"firstName": "Cole",
		"lastName": "Brock"
	},
	{
		"firstName": "Avye",
		"lastName": "Morton"
	},
	{
		"firstName": "Abra",
		"lastName": "Duke"
	},
	{
		"firstName": "Regina",
		"lastName": "Hart"
	},
	{
		"firstName": "Tarik",
		"lastName": "Ochoa"
	},
	{
		"firstName": "Wylie",
		"lastName": "Contreras"
	},
	{
		"firstName": "Portia",
		"lastName": "Weaver"
	},
	{
		"firstName": "Andrew",
		"lastName": "Howe"
	},
	{
		"firstName": "Kelly",
		"lastName": "Glass"
	},
	{
		"firstName": "Zephania",
		"lastName": "Townsend"
	},
	{
		"firstName": "Tatum",
		"lastName": "Doyle"
	},
	{
		"firstName": "Aiko",
		"lastName": "Rocha"
	},
	{
		"firstName": "Zena",
		"lastName": "Hopper"
	},
	{
		"firstName": "Tate",
		"lastName": "Crosby"
	},
	{
		"firstName": "Jayme",
		"lastName": "Heath"
	},
	{
		"firstName": "Hedy",
		"lastName": "Barrera"
	},
	{
		"firstName": "Mary",
		"lastName": "Lott"
	},
	{
		"firstName": "Sylvester",
		"lastName": "Franks"
	},
	{
		"firstName": "Arden",
		"lastName": "Mcpherson"
	},
	{
		"firstName": "Hop",
		"lastName": "Edwards"
	},
	{
		"firstName": "Karen",
		"lastName": "Bowen"
	},
	{
		"firstName": "Isabelle",
		"lastName": "Joseph"
	},
	{
		"firstName": "Len",
		"lastName": "Mcneil"
	},
	{
		"firstName": "Maxwell",
		"lastName": "Whitaker"
	},
	{
		"firstName": "Tara",
		"lastName": "Paul"
	},
	{
		"firstName": "Emi",
		"lastName": "Joyner"
	},
	{
		"firstName": "Olivia",
		"lastName": "Whitehead"
	},
	{
		"firstName": "Mikayla",
		"lastName": "Crosby"
	},
	{
		"firstName": "Kitra",
		"lastName": "Harper"
	},
	{
		"firstName": "Molly",
		"lastName": "Dillon"
	},
	{
		"firstName": "Brenden",
		"lastName": "Velazquez"
	},
	{
		"firstName": "Violet",
		"lastName": "Roman"
	},
	{
		"firstName": "Joel",
		"lastName": "Gilliam"
	},
	{
		"firstName": "Kameko",
		"lastName": "Jefferson"
	},
	{
		"firstName": "Benjamin",
		"lastName": "Arnold"
	},
	{
		"firstName": "Lance",
		"lastName": "Zamora"
	},
	{
		"firstName": "Jelani",
		"lastName": "Farley"
	},
	{
		"firstName": "Jayme",
		"lastName": "Morales"
	},
	{
		"firstName": "Maxine",
		"lastName": "Gregory"
	},
	{
		"firstName": "Tasha",
		"lastName": "Sanchez"
	},
	{
		"firstName": "Clementine",
		"lastName": "Mcgee"
	},
	{
		"firstName": "Tyler",
		"lastName": "Morin"
	},
	{
		"firstName": "Rachel",
		"lastName": "Pennington"
	},
	{
		"firstName": "Idona",
		"lastName": "Mercado"
	},
	{
		"firstName": "Brittany",
		"lastName": "Dillard"
	},
	{
		"firstName": "Cairo",
		"lastName": "Mullen"
	},
	{
		"firstName": "Whilemina",
		"lastName": "Warner"
	},
	{
		"firstName": "Juliet",
		"lastName": "Hunter"
	},
	{
		"firstName": "Brenden",
		"lastName": "Rasmussen"
	},
	{
		"firstName": "Merritt",
		"lastName": "Bridges"
	},
	{
		"firstName": "Eaton",
		"lastName": "Castaneda"
	},
	{
		"firstName": "David",
		"lastName": "Carney"
	},
	{
		"firstName": "Nero",
		"lastName": "Browning"
	},
	{
		"firstName": "Erica",
		"lastName": "Evans"
	},
	{
		"firstName": "Lance",
		"lastName": "Mckay"
	},
	{
		"firstName": "Dai",
		"lastName": "Tillman"
	},
	{
		"firstName": "Yael",
		"lastName": "Hansen"
	},
	{
		"firstName": "Sylvester",
		"lastName": "Austin"
	},
	{
		"firstName": "September",
		"lastName": "Gutierrez"
	},
	{
		"firstName": "Demetrius",
		"lastName": "Parker"
	},
	{
		"firstName": "Wendy",
		"lastName": "Hicks"
	},
	{
		"firstName": "Ali",
		"lastName": "Noble"
	},
	{
		"firstName": "Keefe",
		"lastName": "Brock"
	},
	{
		"firstName": "Price",
		"lastName": "Villarreal"
	},
	{
		"firstName": "Steven",
		"lastName": "Jones"
	},
	{
		"firstName": "Autumn",
		"lastName": "Hill"
	},
	{
		"firstName": "Jorden",
		"lastName": "Avery"
	},
	{
		"firstName": "Illana",
		"lastName": "Barrett"
	},
	{
		"firstName": "Vernon",
		"lastName": "Dyer"
	},
	{
		"firstName": "Ingrid",
		"lastName": "Hartman"
	},
	{
		"firstName": "Calista",
		"lastName": "Douglas"
	},
	{
		"firstName": "Merrill",
		"lastName": "Hatfield"
	},
	{
		"firstName": "Priscilla",
		"lastName": "Pittman"
	},
	{
		"firstName": "Stephanie",
		"lastName": "Peterson"
	},
	{
		"firstName": "Tobias",
		"lastName": "Dorsey"
	},
	{
		"firstName": "Yvonne",
		"lastName": "Vega"
	},
	{
		"firstName": "Zoe",
		"lastName": "Moran"
	},
	{
		"firstName": "Malcolm",
		"lastName": "Goodman"
	},
	{
		"firstName": "Ignacia",
		"lastName": "Carson"
	},
	{
		"firstName": "Dacey",
		"lastName": "Wilkins"
	},
	{
		"firstName": "Patience",
		"lastName": "Downs"
	},
	{
		"firstName": "Yoshio",
		"lastName": "Workman"
	},
	{
		"firstName": "Ivana",
		"lastName": "Whitfield"
	},
	{
		"firstName": "Giselle",
		"lastName": "Livingston"
	},
	{
		"firstName": "Wallace",
		"lastName": "Travis"
	},
	{
		"firstName": "Steven",
		"lastName": "Mack"
	},
	{
		"firstName": "Oren",
		"lastName": "Larson"
	},
	{
		"firstName": "Alfonso",
		"lastName": "Love"
	},
	{
		"firstName": "Nadine",
		"lastName": "Ross"
	},
	{
		"firstName": "Oscar",
		"lastName": "Hogan"
	},
	{
		"firstName": "Cameron",
		"lastName": "Davenport"
	},
	{
		"firstName": "Ava",
		"lastName": "Watkins"
	},
	{
		"firstName": "Remedios",
		"lastName": "Ball"
	},
	{
		"firstName": "Nathaniel",
		"lastName": "Gillespie"
	},
	{
		"firstName": "Clayton",
		"lastName": "Chaney"
	},
	{
		"firstName": "Riley",
		"lastName": "Kirkland"
	},
	{
		"firstName": "Kuame",
		"lastName": "Schroeder"
	},
	{
		"firstName": "Leslie",
		"lastName": "Hahn"
	},
	{
		"firstName": "Summer",
		"lastName": "Vaughn"
	},
	{
		"firstName": "Flavia",
		"lastName": "Stout"
	}
]
}
