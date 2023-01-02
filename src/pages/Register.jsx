import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import * as yup from "yup"
import { UserRegister } from '../redux/actions/UserActions'
import { useNavigate } from "react-router-dom";
export default function Register() {
    const { userregistered } = useSelector(state => state.RegisterUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            fname: "John",
            lname: "Ceena",
            email: "john@gmail.com",
            password: "12345"
        },
        validationSchema: yup.object({
            fname: yup.string().required(),
            lname: yup.string().required(),
            email: yup.string().required(),
            password: yup.string().required()
        }),
        onSubmit: (values) => {
            dispatch(UserRegister(values))

        }
    })
    useEffect(() => {
        userregistered ? navigate("/login") : null
    }, [userregistered])
    return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Registration</div>
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <label for="name" className="form-label">First name</label>
                                    <input
                                        type="text"
                                        id="fname" name="fname" onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} value={formik.values.fname}
                                        className={formik.errors.fname && formik.touched.fname ? "form-control is-invalid" : "form-control "}
                                        placeholder="Enter your first name"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please Enter First Name.</div>
                                </div>
                                <div className='mt-2'>
                                    <label for="name" className="form-label">Last name</label>
                                    <input
                                        type="text"
                                        id="lname" name="lname"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} value={formik.values.lname}
                                        className={formik.errors.lname && formik.touched.lname ? "form-control is-invalid" : "form-control"}
                                        placeholder="Enter your Last name"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please Enter Last Name.</div>
                                </div>
                                <div className="mt-2">
                                    <label for="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        id="email" name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} value={formik.values.email}
                                        className={formik.errors.email && formik.touched.email ? "form-control is-invalid" : "form-control"}
                                        placeholder="Enter Your Email"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please Enter Email.</div>
                                </div>
                                <div className="mt-2">
                                    <label for="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="password" name="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} value={formik.values.password}
                                        className={formik.errors.password && formik.touched.password ? "form-control is-invalid" : "form-control"}
                                        placeholder="Enter Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please Enter a Password.</div>
                                </div>
                                <button type="submit" className="btn btn-dark w-100 mt-3">
                                    Register
                                </button>
                                <p className="text-center mt-3">
                                    Already Have Account? <a href="#">Login</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
