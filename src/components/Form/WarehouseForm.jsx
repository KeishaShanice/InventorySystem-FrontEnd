import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios"


export const Form = () => {

    const schema = yup.object().shape({
        warehouseName: yup.string().required("You must provide a name"),
        location: yup.string().required("You must provide a location"),
        products: yup.string(),
        capacity: yup.number().positive().integer().min(1).max(100).required("Capacity cannot be less than 1 or greater than 100")

    })

    const {register, handleSubmit, formState: {errors}, } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (event, data) => {
        console.log(data.warehouseName)
        try {
            const res = await axios.post('http://localhost:8080/mainwarehouse', {
                name : data.warehouseName,
                location: data.location,
                products: data.products,
                capacity: data.capacity
            })
            console.log('NEW POKEMON!!')
        } catch (err) {
            //console.log(err)
        }   
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("warehouseName")} />
            <p className="error">{errors.warehouseName?.message}</p>
            <input type="text" placeholder="Location" {...register("location")}/>
            <p className="error">{errors.location?.message}</p>
            <input type="text" placeholder="Product IDs" {...register("products")}/>
            <input type="number" placeholder="Capacity" {...register("capacity")}/>
            <p className="error">{errors.capacity?.message}</p>
            <input type="submit" />
        </form>
    )
}
