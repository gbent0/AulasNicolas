const pedidos = []

export function todosOsPedidos(req, res){
    return res.status(200).send(pedidos)
}

export function umPedidoSo(req, res){
    const { id } = req.params
    // return res.status(200).send(pedidos[id])
    const pedidoEncontrado = pedidos.find((id) => id == pedidos.id)
    return res.status(200).send(pedidoEncontrado)
}

export function novoPedido(req, res){
    const { id, cliente, itens, status } = req.body

    if (!itens || !Array.isArray(itens)) {
        return res.status(400).send({ error: "Itens inválidos"});
    }

    const total = itens.reduce((prev, acc) => {
        const total = acc.itens.quantidade * acc.itens.valor
        return prev += total 
    }, [0])
    // console.log(id, cliente, itens, status) 

    pedidos.push({
        id,
        cliente,
        itens,
        status,
        total
    })
 
}

export function atualizarPedido(req, res){
    const { id, cliente, itens, status } = req.body

}

export function deletarPedido(req, res){
    const { id } = req.params

}