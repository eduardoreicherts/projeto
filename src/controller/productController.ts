import { Request, Response } from "express";
import db from '../config/database';

async function listUsers(req: Request, res: Response) {
    db.connection.query('select * from products;', (err, results) => {
        if(err) {
            res.json({
                success: false
            }) 
        } else {
            res.json({
                success: true,
                message: 'listagem de usuarios realizada com sucesso',
                data: results
            }) 
        }
    });
};

async function registUsers(req: Request, res: Response) {
    const querySql = 'insert into products(DS_NAME, DS_DESCRIPTION, NM_VALUE, DS_BRAND, DS_STATUS) values(?,?,?);';

    const params = Array(
        req.body.DS_NAME,
        req.body.DS_DESCRIPTION,
        req.body.NM_VALUE,
        req.body.DS_BRAND,
        req.body.DS_STATUS
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
    const querySql = 'update products set DS_NAME = ?, DS_DESCRIPTION = ?, NM_VALUE = ?, DS_BRAND = ?, DS_STATUS = ? where ID_PRODUCT = ?;';

    const params = [
        req.body.DS_NAME,
        req.body.DS_DESCRIPTION,
        req.body.NM_VALUE,
        req.body.DS_BRAND,
        req.body.DS_STATUS,
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
    const querySql = 'delete from products where ID_PRODUCT = ?;';

    db.connection.query(querySql, [req.params.id], (err, results) => {
        res.json({
            success: true,
            message: 'Deletado com sucesso',
            data: results,
        });
    });
};

export default {listUsers, registUsers, editUser, deleteUser};