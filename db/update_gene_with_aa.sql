update gene
set amino_acid_id = ${amino_acid_id}
where user_id = ${user_id}
and rna_id = ${rna_id}
returning *;