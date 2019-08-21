update gene
set rna_id = ${rna_id}
where user_id = ${user_id}
and dna_id = ${dna_id}
returning *;