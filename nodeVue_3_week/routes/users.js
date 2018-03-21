const express = require('express');
const router = express.Router();
const tbl_user = require('../models/user');


/**
 * router 사용법
 * GET: router.get()
 * POST: router.post()
 * PUT: router.put()
 * DELETE: router.delete()
 *
 * res 사용법
 * res.send(): 문자열로 응답
 * res.json(): 제이슨(Json) 객체로 응답
 * res.render(): 제이드 템플릿을 렌더링
 * res.sendfile(): 파일 다운로드
 */

let testUser = {
    id: "userid",
    password: "userpw"
};

router.post('/', (req, res) => {
    tbl_user.create(req.body)
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send(err)
        });
});

router.post('/login', (req, res) => {
    let id = req.body.user_id;
    let pw = req.body.user_pw;
    tbl_user.findOneByUserId(id)
        .then((user) => {
            if(user.password !== pw) {
                return res.status(404).send({ err: `비밀번호가 틀렸습니다.` });
            } else {
                res.json(user);
            }
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

module.exports = router;