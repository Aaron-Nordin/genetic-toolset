update gene
set rna_id = ${rna_id}
where gene_id = ${gene_id}
returning *