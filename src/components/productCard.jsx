

export default function productCard(props){
    console.log(props);
    return(
        <div className = "" >
            <img className = "productImage" src="https://th.bing.com/th/id/R.512969fd8510ae27e2890226479b552d?rik=MzKb9FQvogTM7g&riu=http%3a%2f%2fwww.asvaminfotech.com%2fimg%2fgallery%2ftesting.jpg&ehk=aWfWOclZ1E%2fqXX8v9uZqDIj1N8ehwvjP5ZFFl5nWguE%3d&risl=&pid=ImgRaw&r=0" />
        <h1>Gaming Laptop</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsum!</p>
       <h2>Price : ${props.price}</h2>
       <h1>{props.name}</h1>
       <h2>{props.description}</h2>
       <button>Add to Cart</button>
       <button>Buy Now</button>
        </div>
    )
}