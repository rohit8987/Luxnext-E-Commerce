

const NewsletterBox = () => {

  const onSubmitHandle = (event) =>{
 event.preventDefault();
  }

  return (
    <form >
    <div className='text-center'>
        <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
        <p className="text-gray-400 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet obcaecati in dolores.
        </p>
        <form onSubmit={onSubmitHandle} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3" >
            <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your Email"/>
            <button type="submit" className="uppercase bg-black text-white text-xs px-10 py-4">subscribe</button>
        </form>
    </div>
    </form>
  )
}

export default NewsletterBox