import { Request, Response } from "express";

import db from '../config/database';

async function listUsers(req: Request, res: Response) {
    db.connection.query('select ce.*, p.*, c.* from clients_ecommerce ce, products p, cart c Where ce.id_client = c.id_client and p.id_product = c.id_product;', (err, results) => {
        if(err) {
            res.json({
                success: false
            }) 
        } else {
            res.json({
                success: true,
                message: 'listagem de usuarios realizada com sucesso',
                data: results
            });
        };
    });
};

async function registUsers(req: Request, res: Response) {
    const querySql = 'insert into cart(ID_CLIENT, ID_PRODUCT) values(?,?);';

    const params = Array(
        req.body.ID_CLIENT,
        req.body.ID_PRODUCT
    );

    db.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            message: 'Cadastro realizado com sucesso',
            data: results
        });
    });
};

async function editUser(req: Request, res: Response) {
    const querySql = 'update cart set ID_CLIENT = ?, ID_PRODUCT = ? where ID_CART = ?;';

    const params = [
        req.body.ID_CLIENT,
        req.body.ID_PRODUCT,
        req.params.id
    ];

    db.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            message: 'Editado com sucesso',
            results: results,
            data: params
        });
    });
};

async function deleteUser(req: Request, res: Response) {
    const querySql = 'delete from cart where ID_CART = ?;';

    db.connection.query(querySql, [req.params.id], (err, results) => {
        res.json({
            success: true,
            message: 'Deletado com sucesso',
            data: results,
        });
    });
};

export default {listUsers, registUsers, editUser, deleteUser};