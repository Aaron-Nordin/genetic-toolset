delete from gene
where gene_id = $1
returning *