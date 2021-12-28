import type {NextPage} from 'next';
import Link from 'next/link'

const AddUser:NextPage = () => {
    return (
        <div>
            Pagina de añadir usuarios
            <div>
                <Link href="/">
                    <a>Ir al home</a>

                </Link>
           
            </div>
        </div>
    )
}

export default AddUser
