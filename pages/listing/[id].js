export async function getStaticPaths(){

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const path = data.map(user => {
        return{
            params: {id: user.id.toString()}
        }
    })

    return{
        paths: path,
        fallback: false
    }
}

export async function getStaticProps(context){

    const id = context.params.id;

    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json()

    return{
        props: {user: data}
    }
}

const UserList = ({user}) => {
    return ( 
        <div className="maindiv">
            <div className="innermain">
                <h2 className="titles">Details</h2>
                <p><span className="font-bold">Name: </span>{user.name }</p>
                <p><span className="font-bold">E-mail: </span>{user.email }</p>
                <p><span className="font-bold">Address: </span>{user.address.city}</p>
                <p><span className="font-bold">Tel-No: </span>{user.phone}</p>
            </div>
        </div>
    );
}
 
export default UserList;