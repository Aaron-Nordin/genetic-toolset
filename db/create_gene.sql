insert into gene (gene_name, gene_desc, user_id, dna_id, rna_id)
values (${gene_name}, ${gene_desc}, ${user_id}, ${dna_id}, ${rna_id})
returning *

