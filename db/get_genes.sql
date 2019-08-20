-- select distinct g.user_id, g.gene_id, g.gene_name, g.gene_desc, 
-- d.dna_seq, r.rna_seq, a.amino_acid_seq
-- from gene g
-- join users u  on g.user_id = u.user_id
-- join dna d on g.dna_id = d.dna_id
-- join rna r on g.rna_id = r.rna_id
-- join amino_acid a on g.amino_acid_id = a.amino_acid_id
-- where g.user_id = $1;

select distinct 
g.user_id, 
g.gene_id, 
g.gene_name, 
g.gene_desc, 
g.dna_id 
d.dna_seq,
r.rna_seq, 
a.amino_acid_seq
from gene g
left join users u  on g.user_id = u.user_id
left join dna d on g.dna_id = d.dna_id
left join rna r on g.rna_id = r.rna_id
left join amino_acid a on g.amino_acid_id = a.amino_acid_id
where g.user_id = $1;