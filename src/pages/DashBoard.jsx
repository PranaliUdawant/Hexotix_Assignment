import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { AddIngridients, AddRecipe, DeleteRecipe, GetAllRecipe, updateRecipe } from '../redux/actions/RecipeActions'
export default function DashBoard() {
    const [deleteId, setdeleteId] = useState()
    const [input, setinput] = useState([])
    const dispatch = useDispatch()
    const { recipes, recipesAdded, updated, deleterecipe } = useSelector(state => state.AllRecipes)
    const [recipedata, setrecipedata] = useState({
        name: "PIZZA",
        desc: "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
        img: "https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        ingredients: ""

    })
    const [updateData, setUpdateData] = useState({})
    const handleAddRecipe = () => {
        dispatch(AddRecipe(recipedata))
    }
    const handleDelete = () => {
        dispatch(DeleteRecipe(deleteId))
    }
    const handleAddIngridient = () => {
        dispatch(AddIngridients())
    }
    useEffect(() => {
        dispatch(GetAllRecipe())
    }, [recipesAdded, updated, deleterecipe])

    return <>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">RECIPE</div>
                        <div class="card-body">
                            <div>
                                <label for="task" class="form-label">Recipe Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    value={recipedata.name}
                                    onChange={e => setrecipedata({ ...recipedata, name: e.target.value })}
                                    placeholder="Enter Your Recipe Name"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please add Recipe Name</div>
                            </div>
                            <div class="mt-2">
                                <label for="desc" class="form-label">Description</label>
                                <textarea id="desc"
                                    value={recipedata.desc}
                                    onChange={e => setrecipedata({ ...recipedata, desc: e.target.value })} class="form-control" rows="3"></textarea>

                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please add description</div>
                            </div>
                            <div class="mt-2">
                                <label for="img" class="form-label">Enter Image URL</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="img"
                                    value={recipedata.img}
                                    onChange={e => setrecipedata({ ...recipedata, img: e.target.value })}
                                    placeholder="Enter Image"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please add image</div>
                            </div>
                            <div>
                                <label for="task" class="form-label">Ingredients</label>
                                <div className='d-flex gap-3'>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="ingredients"
                                        value={input}
                                        onChange={e => setinput(e.target.value)}
                                        placeholder="Enter Your Recipe Name"

                                    />
                                    <button className='btn btn-dark' onClick={handleAddIngridient}>Add</button>
                                </div>
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please add Ingredients</div>
                            </div>
                            <button type="button" onClick={handleAddRecipe} class="btn btn-dark w-100 mt-3">
                                Add Recipe
                            </button>
                        </div>
                    </div>
                    {
                        recipes.map((item, index) => (
                            <>
                                <div class="card mt-4">
                                    <div class="card-header">
                                        {item.name}
                                    </div>
                                    <div class="card-body">
                                        <img src={item.img} alt="" className='img-fluid' />
                                        <p class="card-text">{item.desc}</p>
                                        <div className=''>
                                            <div data-bs-toggle="modal" data-bs-target="#editModal" className="btn btn-warning m-2" onClick={() => { setUpdateData(item) }}>Edit</div>
                                            <div data-bs-toggle="modal" data-bs-target="#deleteModal" className="btn btn-danger" onClick={() => setdeleteId(item.id)}>Delete</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>

        <div class="modal fade" id="editModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModal">Edit Todo</h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <label for="task" class="form-label">Recipe Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                value={updateData.name}
                                onChange={e => setUpdateData({ ...updateData, name: e.target.value })}
                                placeholder="Enter Your Recipe Name"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please add Recipe Name</div>
                        </div>
                        <div class="mt-2">
                            <label for="desc" class="form-label">Description</label>
                            <input
                                type="text"
                                class="form-control"
                                id="desc"
                                value={updateData.desc}
                                onChange={e => setUpdateData({ ...updateData, desc: e.target.value })}
                                placeholder="Enter Recipe description"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please add description</div>
                        </div>
                        <div class="mt-2">
                            <label for="img" class="form-label">Image</label>
                            <input
                                type="text"
                                class="form-control"
                                id="img"
                                value={updateData.img}
                                onChange={e => setUpdateData({ ...updateData, img: e.target.value })}
                                placeholder="Enter Image"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">Please add image</div>
                        </div>
                        <button type="button" data-bs-dismiss="modal" onClick={e => {
                            console.log(updateData)
                            dispatch(updateRecipe(updateData))
                        }} class="btn btn-primary w-100 mt-3">
                            Update Todo
                        </button>
                        <button data-bs-dismiss="modal" type="button" class="btn mt-2 w-100 btn-outline-secondary">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="deleteModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-danger">
                            Are you sure you want delete this todo ?
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body text-danger">
                        <p class="text-center text-muted mb-5">
                            You can delete this todo at any time. If you change your mind, you
                            might not be able to recover it
                        </p>
                        <div class="btn-group w-100">
                            <button type="button" data-bs-dismiss="modal" class="btn btn-outline-danger" onClick={handleDelete}>Yes</button>
                            <button type="button" data-bs-dismiss="modal" class="btn btn-success">NO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
