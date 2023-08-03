//Importar o request e response do express
import { Request, Response } from "express";

import db from '../config/database';

//Função assíncrona do GET
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

//Função assíncrona do POST
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

//Função assíncrona do PUT
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

//Função assíncrona do DELETE
async function deleteUser(req: Request, res: Response) {
    const querySql = 'delete from clients_ecommerce where ID_CLIENT = ?;';

    db.connection.query(querySql, [req.params.id], (err, results) => {
        res.json({
            success: true,
            message: 'Deletado com sucesso',
            data: results,
        });
    });
};

//Exportando funções assíncronas das rotas
export default {listUsers, registUsers, editUser, deleteUser};