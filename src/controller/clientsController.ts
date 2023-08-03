import { Request, Response } from "express";

import db from '../config/database';

async function listUsers(req: Request, res: Response) {
    db.connection.query('select * from clients_ecommerce;', (err, results) => {
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
    const querySql = 'insert into clients_ecommerce(DS_NAME,NM_CPF,FL_STATUS) values(?,?,?);';

    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CPF,
        req.body.FL_STATUS
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
    const querySql = 'update clients_ecommerce set DS_NAME = ?, NM_CPF = ?, FL_STATUS = ? where ID_CLIENT = ?;';

    const params = [
        req.body.DS_NAME,
        req.body.NM_CPF,
        req.body.FL_STATUS,
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
    const querySql = 'delete  from clients_ecommerce where ID_CLIENT = ?;';

    db.connection.query(querySql, [req.params.id], (err, results) => {
        res.json({
            success: true,
            message: 'Deletado com sucesso',
            data: results,
        });
    });
};

export default {listUsers, registUsers, editUser, deleteUser};